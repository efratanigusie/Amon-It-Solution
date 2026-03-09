import React, { useState } from 'react';

const MessageForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const recipient = 'amonict11@gmail.com'; // Recipient's email address
    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${message}`;
  
    // Open the user's default email client
    window.open(mailtoLink, '_blank');
  
    // Reset the form fields
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };
  return (
    
    <form
      className=" w-[30rem] mx-auto p-4 bg-white "
      onSubmit={handleSubmit}
    >
      <h1 className="text-4xl font-bold mb-[2rem] text-blueBlack">Send a Message</h1>
      <div className="mb-4 ">
        <input
          type="text"
          placeholder="Name *"
          id="name"
          className="w-full border border-gray-300 p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          id="email"
          placeholder="Email Address*"
          className="w-full border border-gray-300 p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          id="subject"
          placeholder="Subject *"
          className="w-full border border-gray-300 p-2 rounded"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <textarea
          id="message"
          placeholder="Comment or Message *"
          className="w-full border border-gray-300 p-2 rounded"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="bg-blueBlack hover:bg-blue-800 text-white font-bold py-2 px-4 rounded flex justify-start w-[10rem] text-center"
        >
          Send Message
        </button>
      </div>
    </form>
  
  );
};

export default MessageForm;