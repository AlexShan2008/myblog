import React, { Component } from 'react';
import './Layer.scss';
import '../signin/Sign.scss';
import Email from '../signin/Email';
import Password from '../signin/Password';

function Signbtn(props) {
    return (
        <div className="row signin-btn">
            <button type="submit" onClick={props.handleSignin}>
                Sign in
            </button>
        </div>
    )
}

function SeparatorLine() {
    return (
        <div className="sepLine-wrap">
            <span className="sepLine-text">
                <span>Or</span>
            </span>
        </div>
    )
}

function RegBtn() {
    return (
        <div className="reg-warp">
            <span className="reg-left">No account yet?</span>
            <button className="reg-btn">
                Create Account
            </button>
        </div>
    )
}

function CloseIcon() {
    return (
        <svg viewBox="0 0 24 24" role="img" aria-label="关闭" focusable="false">
            <path
                d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22"></path>
        </svg>
    )
}

class Layer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            checkInput: '',
            emailClassName: '',
            tipClass: '',
            tipText: 'Please input Email 11111111 Address',


        };
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeLayer = this.closeLayer.bind(this);
        this.checkEmail = this.checkEmail.bind(this);
        this.resetCheckEmail = this.resetCheckEmail.bind(this);
        this.checkPwd = this.checkPwd.bind(this);
    }

    handleEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    handlePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        this.checkEmail();

        this.setState({
            checkInput: true
        });
        const data = {
            email: this.state.email,
            password: this.state.password
        };

        console.log(data);
    }

    closeLayer() {
        this.props.toggleShow();
        this.setState({
            checkInput: false
        })
    }

    checkEmail() {
        const email = this.state.email;
        if (!email) {
            this.setState({
                emailClassName: 'input-row warning',
                tipClass: 'show',
                tipText: this.state.tipText

            })
        }
        if (!checkEmail(email)) {
            this.setState({
                tipClass: 'show',
                className: 'input-row warning',
                tipText: 'Please input Correct Email Address'
            });
        } else {
            this.setState({
                className: 'input-row',
                tipClass: ''
            });
        }
    }

    resetCheckEmail() {
        this.setState({
            emailClassName: '',
            tipClass: ''
        })
    }

    checkPwd() {
        this.setState({
            checkInput: false
        })
    }

    render() {
        const showClassName = this.props.showClassName;
        return (
            <div className={showClassName}>
                <div className="layer-container">
                    <div className="layer-content">
                        <div className="closeBtn-wrap clearfix">
                            <button type="button" className="closeBtn" onClick={this.closeLayer}>
                                <CloseIcon />
                            </button>
                        </div>
                        <Email
                            handleEmail={this.handleEmail}
                            email={this.state.email}
                            className={this.state.emailClassName}
                            resetCheckEmail={this.resetCheckEmail}
                            tipClass={this.state.tipClass} />
                        <Password
                            handlePassword={this.handlePassword}
                            checkPwd={this.checkPwd} />
                        <Signbtn handleSignin={this.handleSubmit} />
                        <SeparatorLine />
                        <RegBtn />
                    </div>
                </div>
            </div>
        )
    }
}

export default Layer;

function checkEmail(email) {
    const reg = /^(\w)+@[\w\.]+$/;
    return reg.test(email)
}
function checkPassword(password) {
    const reg = /^[0-9a-zA-Z_]{6,8}$/;
    return reg.test(password)
}