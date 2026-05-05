import React from 'react'
import Section5 from '../Home/Section5/Section5'

const Contact = () => {
  return (
    <div className="flex flex-col gap-10">
      <Section5/>
      <div className="w-full h-[450px] overflow-hidden shadow-inner">
        <iframe
          title="Google Maps Location of Nagagiri Comforts"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.584411575398!2d75.34926337489814!3d13.251377487090314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbb362d714e4d23%3A0x3a345d04f91a8135!2sNagagiri%20Comforts!5e0!3m2!1sen!2sin!4v1722515561849!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}

export default Contact
