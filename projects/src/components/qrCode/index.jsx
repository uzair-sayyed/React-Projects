import { useState } from "react";
import QRCode from "react-qr-code";
import "./styles.css";

export default function QrCode() {
  const [value, setValue] = useState("");
  const [qrCode, setQrCode] = useState("");

  function handleQrCodeGenerate() {
    setQrCode(value);
    setValue("");
  }

  return (
    <div className='container'>
      <div className='actions'>
        <input
          type='text'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleQrCodeGenerate}>Submit</button>
      </div>
      <div className='qrCode'>
        <QRCode value={qrCode} size={200} />
      </div>
    </div>
  );
}
