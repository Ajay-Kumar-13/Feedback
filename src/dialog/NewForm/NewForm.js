import './NewForm.css';

import React, { useState } from 'react';

function NewForm() {

    const [done, setDone] = useState(false);
    const [tag, setTag] = useState('');
    const tagContainer = document.querySelector('.tag-container');
    const createTag = (label) => {
        const div = document.createElement('div');
        div.setAttribute('class', 'tag');
        const span = document.createElement('span');
        span.innerHTML = label
        const closeBtn = document.createElement('img');
        closeBtn.setAttribute('src', '/close.svg');

        div.appendChild(span)
        div.appendChild(closeBtn)
        return div
    }

    const handleEnter = (e) => {
        console.log(e.key);
        if (e.key === 'Enter') {
            const ta = createTag(tag);
            tagContainer.prepend(ta)
        }
    }

    const handleInput = (e) => {
        setTag(e.target.value)
    }


    return (
        <React.Fragment>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Weekly Performance Feedback</h5>
                        </div>
                        {!done ? <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Title</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
                                </div>

                                <div class="row">
                                    <div class="col">

                                        <label for="startdateFormControlInput">Start</label>
                                        <div id="startdateFormControlInput" className="d-flex align-items-center">
                                            <i class="fa fa-solid fa-calendar fp-icon"></i> <input type="date" class="form-control" placeholder="" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <label for="enddateFormControlInput">End</label>
                                        <div id="enddateFormControlInput" className="d-flex align-items-center">
                                            <i class="fa fa-solid fa-calendar fp-icon"></i><input type="date" class="form-control" placeholder="" />
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">To</label>
                                    {/* https://www.youtube.com/watch?v=ha4xwcJXwow&t=12s&ab_channel=FrontendTips */}
                                    <div class="tag-container">
                                        <div class="tag">
                                            <span>Everyone</span>
                                            <img src='/close.svg'></img>
                                        </div>
                                        <div class="tag">
                                            <span>Manager</span>
                                            <img src='/close.svg'></img>
                                        </div>
                                        <input onKeyDown={handleEnter} onChange={handleInput} name='tag' value={tag} ></input>
                                    </div>


                                </div>


                            </form>
                        </div> : <div className='modal-body'>
                            <label for="FormControlCopylink">Copy Link</label>
                            <div id="FormControlCopylink" className="d-flex">
                                <input type="text" class="form-control" placeholder="" value="https:chronos.wpf-1.com.ai" />
                                <div className='copy'>
                                    <img src='/copy.svg'></img>
                                </div>
                            </div>
                        </div>}
                        <div class="modal-footer">
                            <div className='row text-center' style={{ width: '100%' }} >
                                <div className='col-md-6'>
                                    <button type="button" style={{ width: '100%' }} className="btn" data-bs-dismiss="modal" onClick={() => setDone(false)}>Cancel</button>
                                </div>
                                <div className='col-md-6'>
                                    <button type="button" style={{ width: '100%' }} className="btn btn-dark" onClick={() => setDone(true)}>{done ? 'Copy Link' : 'Done'}</button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default NewForm;