import React, { useEffect, useState } from "react";
import Modals from "../../../utils/Modals";
import { LiaTimesSolid } from "react-icons/lia";
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Button = ({ icon, text, click }) => {
  return (
    <button
      onClick={click}
      className="flex items-center gap-10 sm:w-[20rem] border border-black px-3 py-2 rounded-full"
    >
      {icon} {text}
    </button>
  );
};

function Auth() {
  const [createUser, setCreateUser] = useState(false);
  const [signReq, setSignReq] = useState("");
  const [modal, setModal] = useState(true);

  const hidden = modal ? "visible opacity-100" : "invisible opacity-0";

  return (
    <>
      <Modals modal={modal} setModal={setModal} hidden={hidden}>
        <section
          className={`z-50 fixed top-0 bottom-0 left-0 md:left-[10rem] overflow-auto right-0 md:right-[10rem] bg-white shadows ${hidden} transition-all duration-500`}
        >
          <button onClick={() => setModal(false)} className="absolute top-5 right-5 text-2xl hover:opacity-50">
            <LiaTimesSolid />
          </button>

          <div className="flex flex-col justify-center items-center gap-[3rem]">
            {signReq === "" ? (
              <>
                <h2 className="text-2xl pt-[5rem]">
                  {createUser ? "Join Medium" : "Welcome Back"}
                </h2>
                <div className="flex flex-col gap-2 w-fit mx-auto">
                  <Button
                    icon={<FcGoogle className="text-2xl" />}
                    text={`${createUser ? "Sign Up" : "Sign In"} with Google`}
                  />
                  <Button
                    icon={<MdFacebook className="text-2xl text-blue-500" />}
                    text={`${createUser ? "Sign Up" : "Sign In"} with Facebook`}
                  />
                  <Button
                    click={() => setSignReq(createUser ? "sign-up" : "sign-in")}
                    icon={<AiOutlineMail className="text-2xl" />}
                    text={`${createUser ? "Sign Up" : "Sign In"} with Email`}
                  />
                </div>
                <p>
                  {createUser ? "Already have an account" : "No Account"}{" "}
                  <button
                    onClick={() => setCreateUser(!createUser)}
                    className="text-green-600 hover:text-green-700 font-bold ml-1"
                  >
                    {createUser ? "Sign In" : "Create one"}
                  </button>
                </p>
              </>
            ) : signReq === "sign-in" ? (
              <SignIn setSignReq={setSignReq} />
            ) : (
              <SignUp setSignReq={setSignReq} />
            )}
            <p className="md:w-[30rem] mx-auto text-center text-sm mb-[3rem]">
              Click “Sign up” to agree to Medium’s Terms of Service and
              acknowledge that Medium’s Privacy Policy applies to you.
            </p>
          </div>
        </section>
      </Modals>
    </>
  );
}

export default Auth;
