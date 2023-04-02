import React from 'react';
import '../styles/BlackFooter.css';

export default function BlackFooter() {
    return (
        <div className='upfooter_container'>
            <div>
                <p className='upfooter_large_head'>6000+ Users trust StarClinch</p>
                <p className='upfooter_small_head'>Booking Terms & Conditions</p>
            </div>

            <div>
                <p className='upfooter_large_head' >BOOKING TERMS & CONDITIONS FOR CLIENT</p>
                <p className='advanceP'>Advance Fee and Payment Terms</p>
            </div>

            <div className='upfooter_downpart'>
                <p>All acts are subject to availability</p>
                <p>GST @18% will be applicable</p>
                <p>We take an advance of 50% to confirm a show</p>
                <p>Quotation is valid for 14 days and subject to change</p>
                <p>The balance amount needs to be paid 7 days before the show</p>
                <p>TBL (Travel, Boarding & Lodging) will be arranged by the organizer</p>
                <p>Tech-Rider (sound, stage & lighting) will be arranged by the organizer</p>
                <p>EMI is applicable for payments made by Credit Cards only</p>
            </div>
        </div>
    )
}