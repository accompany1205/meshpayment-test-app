import React from "react";
import mockData from "../mock/profileData";
import ProfileRow from "../components/ProfileRow";
import './ProfileList.css';

function ProfileList() {
    return (
        <>
            {mockData.map((rowData, index) => (
                <div key={index} className="profile-list">
                    <ProfileRow rowData={rowData} />
                    {index < (mockData.length - 1) && (
                        <div className="profile-row-border" data-testid="profile-row-border" />
                    )}
                </div>

            ))}
        </>
    )

}

export default ProfileList;