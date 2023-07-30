import { PopupModal } from "react-calendly";

const Calendly = ({ setPopupOpen, isPopupOpen }) => {
  return (
    <div>
      <PopupModal
        url={process.env.REACT_APP_CALENDLY_URL}
        onModalClose={() => setPopupOpen(false)}
        open={isPopupOpen}
        rootElement={document.getElementById("root")}
      />
    </div>
  );
};

export default Calendly;
