import obj from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
      <div>
          <div className={obj.profileImg}>
              <img src="https://images.pexels.com/photos/141784/pexels-photo-141784.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="profile photo"/>
          </div>
          <div className={obj.descriptionBlock}>
              <div className={obj.avatarImg}>
                  <img src="https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="avatar"/>
              </div>
              <div className={obj.peopleDescription}>
                  <div>Name: Dasha</div>
                  <div>Surname: Undefined</div>
                  <div>Education: University</div>
                  <div>City: Moscow</div>
              </div>
          </div>
      </div>
    );
}

export default ProfileInfo;