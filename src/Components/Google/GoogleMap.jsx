import React from "react";

export default function GoogleMap() {
  return (
    <div className="w-full h-[400px] relative  ">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d349.94792867897485!2d80.01807544006425!3d7.1017763163067125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2slk!4v1734094699976!5m2!1sen!2slk"
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
