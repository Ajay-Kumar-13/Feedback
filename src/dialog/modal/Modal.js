import React from "react";
import './modal.css'

function Modal() {

    return (
        <React.Fragment>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Holiday Request</h5>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Name it</label>
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
                                    <label for="exampleFormControlTextarea1">Reason</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>

                                <div class="form-group">
                                    <label for="exampleFormControlrequesting">Requesting</label>
                                    <input type="text" class="form-control" id="exampleFormControlrequesting" placeholder="" />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="cancelBtn" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="requestBtn">Send Request</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Modal;