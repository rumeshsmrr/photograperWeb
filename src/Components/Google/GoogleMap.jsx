import React from "react";

export default function GoogleMap() {
  return (
    <div className="w-full h-[400px] relative  ">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2882.9185312371633!2d79.8927721598119!3d6.870752567440421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slk!4v1734024155123!5m2!1sen!2slk"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        style={{ border: 0 }}
        className="rounded-2xl absolute inset-0 mix-blend-luminosity"
      ></iframe>
      {/* <div className="bg-slate-900 absolute top-0 w-full h-full rounded-2xl mix-blend-overlay">
        {" "}
      </div> */}
    </div>
  );
}
