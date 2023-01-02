import React from "react";
import "./userProfileCard.css";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSetProfilePictureMutation } from "../../redux/Features/api/apiSlice";

const SUPPORTED_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/png",
  "image/webp",
];

const schema = yup.object().shape({
  profilePic: yup
    .mixed()
    .typeError("Please select a valid image")
    .test("fileType", "Selected file is not an image", (value) =>
      Object.entries(value).every((img) =>
        SUPPORTED_FORMATS.includes(img[1].type)
      )
    ),
});

function UserProfileCard({ name, email, picture, id }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [changePicture] = useSetProfilePictureMutation();

  const submitHandler = async (data) => {
    try {
      const { profilePic } = data;
      console.log(profilePic)
      const formData = new FormData();
      formData.append("profilePic", profilePic[0]);
      const res = await changePicture({ formData, id }).unwrap();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="card">
      <div className="card_background_img"></div>
      <div
        className="card_profile_img"
        style={{ backgroundImage: `url(${picture})` }}
      ></div>
      <div className="user_details">
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
      <div className="card_count">
        <div className="count">
          <div className="fans"></div>
          <div className="following">
            <form
              onSubmit={handleSubmit(submitHandler)}
              encType="multipart/form-data"
            >
              <input type="file" id="myFile" {...register("profilePic")} />
              <Button type="submit">Change photo</Button>
              <p style={{ color: "red" }}>{errors.profilePic?.message}</p>
            </form>
          </div>
          <div className="post"></div>
        </div>
      </div>
    </div>
  );
}

export default UserProfileCard;
