import logo from "../assets/Group.png";
import PropTypes from 'prop-types';

const Modal = ({ onClose, totalCost }) => {
    return (
        <div>
            <dialog id="my_modal_1" className="modal" open>
                <div className="modal-box text-center">
                    <img className="mx-auto mb-3" src={logo} alt="Payment Success" />
                    <h3 className="font-bold text-lg">Payment Successfully</h3>
                    <p className="py-4">Thanks for purchasing.</p>
                    <p className="mb-4">Total: ${totalCost.toFixed(2)}</p>
                    <div>
                        <button className="btn px-10 rounded-3xl" onClick={onClose}>Close</button>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    totalCost: PropTypes.number.isRequired 
};

export default Modal;
