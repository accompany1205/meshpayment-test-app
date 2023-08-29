import React, { useState, useEffect } from "react";
import './ProfileRow.css';

function ProfileRow({ rowData }) {

    const [screenWidth, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Initial set-up
        setWidth(window.innerWidth);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    //desktop view
    if (screenWidth > 600) {
        return (
            <div className="profile-row">
                <div className="profile-row-column">
                    <img src={rowData.avatar} alt="profile avatar" />
                    <div>
                        <p>{rowData.name}</p>
                        <p>{rowData.email}</p>
                    </div>
                </div>
                <div className="profile-row-column">
                    <div>
                        <p>{rowData.birthDay}</p>
                        <p>Birth Date</p>
                    </div>
                </div>
                <div className="profile-row-column">
                    <div>
                        <p>{rowData.address}</p>
                        <p>Address</p>
                    </div>
                </div>
                <div className="profile-row-column">
                    <div>
                        <p>{rowData.phoneNumber}</p>
                        <p>Phone Number</p>
                    </div>
                </div>
                <div className="profile-row-column">
                    <div>
                        <p>{rowData.password}</p>
                        <p>Password</p>
                    </div>
                </div>
            </div>
        )
    }
    else { // mobile and tablet view
        return (
            <div className="profile-row">
                <div className="profile-row-column">
                    <img src={rowData.avatar} alt="profile avatar" />
                    <div>
                        <p>{rowData.name}</p>
                        <p>{rowData.email}</p>
                    </div>
                </div>
                <hr />
                <div className="display-flex-between">
                    <div className="profile-row-column w-70">
                        <div>
                            <p>{rowData.birthDay}</p>
                            <p>Birth Date</p>
                        </div>
                    </div>
                    <div className="profile-row-column w-30">
                        <div>
                            <p>{rowData.password}</p>
                            <p>Password</p>
                        </div>
                    </div>
                </div>
                <div className="display-flex-between">
                    <div className="profile-row-column w-70">
                        <div>
                            <p>{rowData.address}</p>
                            <p>Address</p>
                        </div>
                    </div>
                    <div className="profile-row-column w-30">
                        <div>
                            <p>{rowData.phoneNumber}</p>
                            <p>Phone Number</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileRow;