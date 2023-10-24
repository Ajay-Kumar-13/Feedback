from flask import Flask, request, jsonify
from flask_socketio import SocketIO, emit
from flask_cors import CORS

import openai


class ChatApp:
    def __init__(self):
        # Setting the API key to use the OpenAI API
        openai.api_key = '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'
        self.conversations = {}  # Dictionary to hold separate conversations

    def start_conversation(self, conversation_id):
        self.conversations[conversation_id] = [
            {"role": "system", "content": "you are an effective HR executive capable of seeking specific actionable feedback from employees by asking them questions and asking follow-up questions when employee answers are too vague."},
            {"role": "assistant", "content": "Do you have any feedback to give"},
        {"role": "user", "content": "My teammates are holding me back from completing my deliverables"},
        {"role": "assistant", "content": "I am sorry to hear that, I will let the manager know about it. Could you please elaborate on the specific instances when your teammates held you back?"},
        {"role": "user", "content": "Sure, they are unavailable most of the time."},
        {"role": "assistant", "content": "Thank you so much for bringing this to our attention. This matter will be addressed at the earliest. Is there anything else you would like to add?"},
        {"role": "user", "content": "Now start a new conversation by asking them their name, ensure you get the name. Start taking their feedback next by asking them if they have any problem at work. Remember ask them one question at a time and only when you're done asking questions use 'Have a great day!'."}
        ]

    def end_conversation(self, conversation_id):
        if conversation_id in self.conversations:
            del self.conversations[conversation_id]

    def chat(self, conversation_id, message):
        if conversation_id not in self.conversations:
            self.start_conversation(conversation_id)

        messages = self.conversations[conversation_id]
        messages.append({"role": "user", "content": message})

        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=messages
        )

        print(response)
        messages.append({"role": "assistant", "content": response["choices"][0]["message"].content})
        return response['choices'][0]['message']['content']

    def Savereturn(self, conversation_id):
        if conversation_id in self.conversations:
            return self.conversations[conversation_id]
        else:
            return []
        
    def summarise(self,message):
        summarise_chat = [
            {"role": "system", "content": "You are an effective Manager supportive HR executive capable of summarizing feedback collected from employees and giving the feedback to the Manager. Below is the chat with an employee. Summarize it in 2 lines or less."},
            {"role": "user", "content": str(message)}
        ]

        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=summarise_chat
        )
        return response['choices'][0]['message']['content']

app = Flask(__name__)
app.debug = True
socketio = SocketIO(app, cors_allowed_origins="*")

@socketio.on("connect")
def connected():
    print("connected to the client")

@socketio.on("disconnect")
def disconnected():
    print("Disconnected!")

@socketio.on("start")
def start(conversation_id):
    global ch
    ch = ChatApp()
    ch.chat(conversation_id, "hello")
    # ch.start_conversation(conversation_id)
    emit("start", {'data': f'Connected to conversation {conversation_id}'})

@socketio.on('upload')
def get_answer(data):
    conversation_id = data['conversation_id']
    message = data['message'].lower()
    response = ch.chat(conversation_id, message)
    emit("upload", {'data': response})

@socketio.on('get_question')
def get_question(data):
    conversation_id = data['conversation_id']
    messages = ch.Savereturn(conversation_id)
    print(messages)
    if messages:
        latest_message = messages[-1]['content']
        if 'Have a great day!' in latest_message:
            ch.end_conversation(conversation_id)
        emit("get_question", {'data': latest_message, 'conversationId': conversation_id})
    else:
        emit("get_question", {'data': 'No conversation'})

@app.route('/summarise', methods=['POST'])
def get_summary():
    answer = request.json['feedback']
    return ch.summarise(answer)

if __name__ == '__main__':
    ch = ChatApp()
    socketio.run(app, host='0.0.0.0', port=5000)
