import { PopupModal } from "react-calendly";

const Calendly = ({ setPopupOpen, isPopupOpen }) => {
  return (
    <div>
      <PopupModal
        url="https://calendly.com/devlaamseboeren/30min"
        onModalClose={() => setPopupOpen(false)}
        open={isPopupOpen}
        rootElement={document.getElementById("root")}
      />
    </div>
  );
};

export default Calendly;
