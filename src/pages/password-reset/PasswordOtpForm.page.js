import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Jumbotron } from "react-bootstrap";
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";
import UpdatePasswordForm from "../../components/password-reset/UpdatePasswordForm.comp";

//Workflow

// [x] Create password reset page
// [] Add request OTP form
// [] Add redux store with Redux-toolkit to handle the network status
// [] sent OTP to email from API (API Already created)
// [] Load form to input OTP and new password
// [] New password must match confirm password, form validation
// [] Connect to API Endpoint (API Already created)
// [] Add reducer through Redux-toolkit to handle the network status and provide the feedback to the user
// [] Send email, OTP and new password to update the password.

export const PasswordOtpForm = () => {
	const { showUpdatePassForm } = useSelector(state => state.password);

	return (
		<div className="entry-page">
			<div className="mt-5">

        <p className="backMain">
        <a href="/">На Главную</a>
          </p>
				<Jumbotron className="form-box bg-white">
					{showUpdatePassForm ? <UpdatePasswordForm /> : <ResetPassword />}
					<div className="text-center">
						<a href="/entry">Войти </a>
					</div>
				</Jumbotron>
			</div>
		</div>
	);
};
