import styles from '../styles/LoginRegister.module.css';
import React, { useRef } from 'react';

export class LoginRegister extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isContainerActive: false
        }
    }

    
    // TODO: ubah isi className, kasih page id gitu; example: className="title" -> className="in-recipe-title"
    //       ubah juga nama class nya di file css yang bersangkutan
    render() {
        // TODO: masih gabisa nih pencet button add/remove class
        let isContainerActive = this.state;

        const registerButton = () => {
            isContainerActive = false;
        }

        const loginButton = () => {
            isContainerActive = true;
        }

        return (
            <div className={styles.bodyLogin}>
                <div className={`${styles.container} ${isContainerActive?` ${styles.rightPanelActive}`:''}`} id="container">
    
                    <div className={`${styles.formContainer} ${styles.registerContainer}`}>
                        <form action="#">
                            <h1>Register here.</h1>
                            <input type="text" placeholder="Name"/>
                            <input type="email" placeholder="Email"/>
                            <input type="password" placeholder="Password"/>
                            <button>Register</button>
                        </form>
                    </div>

                    <div className={`${styles.formContainer} ${styles.loginContainer}`}>
                        <form action="#" className={styles.formLogin}>
                            <h1>Login here.</h1>
                            <input type="email" placeholder="Email"/>
                            <input type="password" placeholder="Password"/>
                            <div className={styles.content}>
                            <div className={styles.checkbox}>
                                <input type="checkbox" name="checkbox" id="checkbox"/>
                                <label>Remember me</label>
                            </div>
                            <div className={styles.passLink}>
                                <a href="#">Forgot password?</a>
                            </div>
                            </div>
                            <button>Login</button>
                        </form>
                    </div>

                    <div className={styles.overlayContainer}>
                        <div className={styles.overlay}>
                            <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
                            <h1 className={styles.title}>Hello <br/> peeps!</h1>
                            <p>if you already have an account, login here and start your mangkir journey</p>
                            <button className={styles.ghost} id="login" onClick={loginButton}>Login
                                <i className={`${styles.lni} ${styles.lniArrowLeft} ${styles.login}`}></i>
                            </button>
                            </div>
                            <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
                            <h1 className={styles.title}>Start your <br/> mangkir now!</h1>
                            <p>if you don't have an account yet, join us and start your mangkir journey.</p>
                            <button className={styles.ghost} id="register" onClick={registerButton}>Register
                                <i className={`${styles.lni} ${styles.lniArrowRight} ${styles.register}`}></i>
                            </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
        );
    }
}