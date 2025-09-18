"use client"
import SelectBox from "@/components/atoms/SelectBox"
import { useState } from "react"

const options_Services = [
  { value: "Option 1", label: "Option 1"},
  { value: "Option 2", label: "Option 2"},
  { value: "Option 3", label: "Option 3"},
  { value: "Option 4", label: "Option 4"},
]
export default function ContactForm(){
    const [services, setServices] = useState(null)
    return(
        <div className="contact-secB sec-pad-all bgprime">
            <div className="container">
                <div className="heading">
                    <h4>Reliable Lighting Starts With a Conversation</h4>
                    <p>Have a Question? We're Just a Click Away!</p>
                </div>
                <div className="form-wrapper">
                    <div className="form form-grid">
                        <div className="form-group">
                            <input type="text" name="fname" className="form-control" />
                            <label htmlFor="fname">Name</label>
                        </div>
                        <SelectBox 
                            id="services-select"
                            placeholder="Services*"
                            options={options_Services}
                            selectedValue={services}
                            onValueChange={setServices}
                        />
                        <div className="form-group">
                            <input type="email" name="email" className="form-control" />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="form-group">
                            <input type="tel" name="phone" className="form-control" />
                            <label htmlFor="phone">Phone</label>
                        </div>
                        <div className="form-group full">
                            <textarea name="message" className="form-control" />
                            <label htmlFor="message">Message</label>
                        </div>
                        <div className="submit-grp full">
                            <button type="button" className="btn solid">Enquire Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}