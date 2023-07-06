import React,{useState} from 'react';
import {useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBirthdayCake, faPen} from '@fortawesome/free-solid-svg-icons';
import moment from 'moment'

import './UserProfile.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import Avatar from '../../components/Avatar/Avatar';
import ProfileBio from './ProfileBio';
import EditProfileForm from './EditProfileForm';

const UserProfile = () => {
    const {id} = useParams()
    const users = useSelector((state) => state.usersReducer);
    const currentProfile = users.filter((user) => user._id === id)[0]
    const currentUser = useSelector((state) => (state.currentUserReducer));

    const [Switch, setSwitch] = useState(false);
    var today = new Date();
    
  return (
    <div className='home-container-1'>
        <LeftSidebar/>
        <div className='home-container-2'>
            <section>
                <div className='user-details-container'>
                    <div className='user-details'>
                        <Avatar backgroundColor="purple" color="white" fontSize="50px" px="40px" py="30px">
                        {currentProfile?.name.charAt(0).toUpperCase()}
                        </Avatar>
                        <div className='user-name'>
                            <div style={{display:'flex'}}>
                                <h1>{currentProfile?.name}</h1>&nbsp;&nbsp;
                                <h2>({today.getFullYear() - moment(currentProfile?.dob).year()}yrs)</h2>
                            </div>
                            <span style={{color:'#3f3e3e'}}>{currentProfile?.location !== "" ? currentProfile?.location : "No location added"}<button style={{marginLeft:'5px'}} onClick={() => setSwitch(true)}>Set location</button></span>
                            <p><FontAwesomeIcon icon={faBirthdayCake}/> Joined {moment(currentProfile?.joinedOn).fromNow()}</p>
                        </div>
                    </div>
                    <div>
                        {
                            currentUser?.result?._id === id && (
                                <button type='button' onClick={() => setSwitch(true)} className="edit-profile-btn">
                                    <FontAwesomeIcon icon={faPen} />
                                    Edit Profile
                                </button>
                            )
                        }
                    </div>
                </div>
                <>
                    {
                       Switch ? (
                           <EditProfileForm currentUser={currentUser} setSwitch={setSwitch} />
                       ) : (
                           <ProfileBio currentProfile={currentProfile} />
                       )
                    }
                </>
            </section>
        </div>
    </div>
  )
}

export default UserProfile