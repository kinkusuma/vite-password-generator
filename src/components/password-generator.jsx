import React, { useState } from "react";

export const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [includeLetters, setIncludeLetters] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const generatePassword = () => {
    const letterChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=[]{}|;':,.<>/?";
    let chars = "";
    if (includeLetters) chars += letterChars;
    if (includeNumbers) chars += numberChars;
    if (includeSymbols) chars += symbolChars;

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password).then(() => {
      alert("Password copied to clipboard!");
    });
  };

  return (
    <div className='isolate max-w-sm mx-auto my-10 p-5 rounded-xl bg-white shadow-lg'>
      <h2 className='text-xl font-bold mb-3'>Penghasil Kata Sandi Acak</h2>
      <p className='mb-5'>
        Dapat menghasilkan kata sandi acak yang lebih aman dan lebih susah
        diprediksi.
      </p>
      <div className='flex items-center mb-5'>
        <input
          className='flex-grow p-2 mr-2 border rounded'
          value={password}
          readOnly
        />
        <button
          className='p-2 bg-blue-500 text-white rounded'
          onClick={copyToClipboard}
        >
          Salin
        </button>
      </div>
      <div className='mb-3'>
        <label className='block mb-2'>Panjang Sandi</label>
        <input
          type='range'
          min='1'
          max='20'
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className='w-full'
        />
        <div className='text-center'>{length}</div>
      </div>
      <div className='mb-3'>
        <label className='inline-flex items-center'>
          <input
            type='checkbox'
            checked={includeLetters}
            onChange={(e) => setIncludeLetters(e.target.checked)}
            className='mr-2'
          />
          Huruf (A-Z, a-z)
        </label>
      </div>
      <div className='mb-3'>
        <label className='inline-flex items-center'>
          <input
            type='checkbox'
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
            className='mr-2'
          />
          Angka (0-9)
        </label>
      </div>
      <div className='mb-5'>
        <label className='inline-flex items-center'>
          <input
            type='checkbox'
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
            className='mr-2'
          />
          Simbol
        </label>
      </div>
      <button
        className='w-full p-2 bg-blue-600 text-white rounded'
        onClick={generatePassword}
      >
        Generate
      </button>
    </div>
  );
};
