import React from 'react'
import { ReactComponent as AddImage } from 'assets/svg/AddImage.svg';
import { ReactComponent as Plus } from 'assets/svg/plus.svg';
import { ReactComponent as CloseIcon } from 'assets/svg/close.svg';
import { common } from 'assets';
import CustomSlider from '../carousel';

const ActionModal = props => {
return (
    <div className="action-modal shadow-sm">
        <div className="modal-header">
            <button type="button" className="close" aria-label="Close">
                <CloseIcon style={{ height: '40px', width: '40px', display: 'block' }}/>
            </button>
        </div>
        <div className="modal-body">
            {/* <div className="reject-edit-preview">
                <form>
                    <p className="bold-text mb-4">Image (optional)</p>
                    <div className="upload-drop-zone" id="drop-zone">
                        <AddImage className="mb-4 d-desktop-only" alt="" />
                        <div className="d-flex justify-content-center">
                            <span className="d-desktop-only">Drag & Drop or</span>
                            <Plus className="plus-icon d-ipad-only d-mobile-only" />
                            <div className="form-group">
                                <input className="m-0" type="file" name="" id="js-upload-files" multiple />
                                <span className="font-bold browse d-desktop-only">Browse</span>
                                <span className="font-bold browse d-ipad-only d-mobile-only">Upload document <span className="text-black">(jpg, png)</span></span>
                            </div>
                            <span className="d-desktop-only">files to upload</span>
                        </div>
                    </div>
                    <div className="upload-drop-zone__files mt-4 mb-4">
                        <ul className="">
                            <li className="" id="">image-01.jpg</li>
                            <li className="" id="">image-02.jpg</li>
                        </ul>
                    </div>
                </form>
            </div> */}
            <div className="is-reject-form">
                <p className="mb-4 bold-text">Reason</p>
                <div className="is-preview-upload">
                    <p>Damaged / Broken / defaced barcode</p>
                    <p>Others: Unofficial seal</p>
                    <CustomSlider />
                </div>
            </div>
            {/* <div className="is-edit-reject">
                <p className="mb-4 bold-text">Reason</p>
                <form>
                    <div className="form-nea__checkgroup">
                        <div className="form-nea__block">
                            <div className="nea-chkbx form-group">
                                <label className="custom-chckbbox">
                                    Unofficial seal
                                    <input className="form-control" type="checkbox" name="" id="" value="" checked="" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <div className="form-nea__block">
                            <div className="nea-chkbx form-group">
                                <label className="custom-chckbbox">
                                    Tampered / broken seal
                                    <input className="form-control" type="checkbox" name="" id="" value="" checked="" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <div className="form-nea__block">
                            <div className="nea-chkbx form-group">
                                <label className="custom-chckbbox">
                                    Damaged / broken / defaced barcode
                                    <input className="form-control" type="checkbox" name="" id="" value="" checked="" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <div className="form-nea__block">
                            <div className="nea-chkbx form-group">
                                <label className="custom-chckbbox">
                                    Cracked vial with leakage of water
                                    <input className="form-control" type="checkbox" name="" id="" value="" checked="" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <div className="form-nea__block">
                            <div className="nea-chkbx form-group">
                                <label className="custom-chckbbox">
                                    Broken vial
                                    <input className="form-control" type="checkbox" name="" id="" value="" checked="" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <div className="form-nea__block">
                            <div className="nea-chkbx form-group">
                                <label className="custom-chckbbox">
                                    Empty with cracked / damaged vial
                                    <input className="form-control" type="checkbox" name="" id="" value="" checked="" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <div className="form-nea__block">
                            <div className="nea-chkbx form-group mb-0">
                                <label className="custom-chckbbox">
                                    Other
                                    <input className="form-control checked" type="checkbox" name="" id="" value="" checked="true" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className="form-nea__checkgroup-ul show">
                                <div className="form-group modal-others">
                                    <label className="custom-textbox">
                                        <input className="form-control textField modal-reason" type="text" name="" id="" value="" placeholder="Please state reason" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>  
                </form>
            </div> */}
        </div>
        <div className="modal-footer justify-content-end">
            <button type="button" className="btn btn-light">Cancel</button>
            <button type="submit" className="btn btn-pri">Next</button>
        </div>
    </div>
    )
}

export default ActionModal
