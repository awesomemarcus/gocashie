import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "pickerjs/dist/picker.min.css";
import Picker from "pickerjs/dist/picker.min.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMars, faVenus } from "@fortawesome/free-solid-svg-icons";
import useAppActions from "../core/useAppActions";

const FormLayoutStyled = styled.div`
  background: rgba(0, 0, 0, 0.25);
`;

const AvatarStyled = styled.div`
  width: 125px;
  height: 125px;
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const RadioStyled = styled.label`
  display: block;
  position: relative;
  user-select: none;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  line-height: 2rem;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
  }

  .marker {
    position: relative;
    z-index: 5;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    span {
      line-height: 12px;
    }
  }

  input:checked ~ .marker {
    background-color: #50aaf5;

    span {
      color: #fff;
    }
  }
`;

export default () => {
  const { signUp } = useAppActions();
  const [userInfo, setUserInfo] = useState({
    firstName: null,
    lastName: null,
    birthDate: null,
    address: null,
    occupation: null,
    username: null,
    password: null
  });

  function onBlur(e) {
    e && e.preventDefault && e.preventDefault();
    const obj = {};
    console.log(obj);
    obj[e.currentTarget.name] = e.currentTarget.value;
    setUserInfo(state => ({ ...state, ...obj }));
  }

  useEffect(() => {
    const birthDate = document.getElementById("birthDate");
    const picker = new Picker(birthDate, {
      format: "MMMM DD YYYY",
      headers: true,
    });

    picker.pick = e => {
      const selectedDate = picker.getDate(true);
      const obj = {};
      obj['birthDate'] = selectedDate;
      setUserInfo(state => ({...state, ...obj}));
      return picker.hide();
    }

    console.log(userInfo);
  }, [userInfo]);

  return (
    <div className="my-auto flex flex-col px-2 py-3">
      <h1 className="font-bold text-center text-gray-200 tracking-wider mb-3 text-3xl">
        GOCASHIE
      </h1>
      <form action="" className="">
        <AvatarStyled className="mx-auto rounded-full bg-gray-200 border-4 border-gray-600 mb-3 overflow-hidden">
          <FontAwesomeIcon icon={faUser} size="4x" className="text-gray-500" />
        </AvatarStyled>
        <FormLayoutStyled className="flex flex-col w-11/12 mx-auto py-5 px-8 rounded mb-3">
          <div className="mb-3">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              className="w-full appearance-none rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onBlur={onBlur}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              className="w-full appearance-none rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onBlur={onBlur}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              id="birthDate"
              name="birthDate"
              value={userInfo.birthDate}
              placeholder="Birth Date"
              className="w-full appearance-none rounded py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Address"
              className="w-full appearance-none rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onBlur={onBlur}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              id="occupation"
              name="occupation"
              placeholder="Occupation"
              className="w-full appearance-none rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onBlur={onBlur}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              className="w-full appearance-none rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onBlur={onBlur}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-full appearance-none rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onBlur={onBlur}
            />
          </div>
          <div className="mb-3 flex flex-row rounded bg-gray-200 overflow-hidden">
            <RadioStyled htmlFor="male" className="flex-1">
              <input type="radio" checked="checked" name="gender" id="" />
              <div className="marker">
                <span>
                  <FontAwesomeIcon icon={faMars} /> MALE
                </span>
              </div>
            </RadioStyled>
            <RadioStyled htmlFor="female" className="flex-1">
              <input type="radio" name="gender" id="" />
              <div className="marker">
                <span>
                  <FontAwesomeIcon icon={faVenus} /> FEMALE
                </span>
              </div>
            </RadioStyled>
          </div>
          <button className="W-100 bg-teal-400 hover:bg-teal-500 text-white font-bold rounded py-2 text-xl">
            CREATE ACCOUNT
          </button>
        </FormLayoutStyled>
      </form>
      <p className="text-center text-white italic text-xs">
        <Link to="/login" className="text-yellow-400">
          Login your account
        </Link>
      </p>
    </div>
  );
};
