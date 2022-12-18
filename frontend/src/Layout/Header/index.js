import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBell, faCircle, faHome, faMap, faSearch, faUser} from '@fortawesome/free-solid-svg-icons';

import LogoWebsite from '~/Layout/Logo';
import { Link, useNavigate } from 'react-router-dom';
import Request from '~/utils/requests';

import { useState, useEffect } from 'react';
const cx = classNames.bind(styles);
function Header() {
    const [dataUser, setDataUser] = useState(0);
    useEffect(() => {
        request.Get(`http://127.0.0.1:8000/api/admin/getuserif?id=${id}`, [], (res) => {
            console.log('Trả về nè:', res);
            setDataUser({ ...res.data.data });
            let username = res.data.data.name;
            username = username.split(' ');
            username = username[username.length - 1];
            console.log('ACS', username);
            localStorage.setItem('username', username);
        });
    }, []);
    const navigate = useNavigate();
    const request = new Request();
    const id = localStorage.getItem('user_id');
    if (id == null) {
        alert('Thao Tác Lỗi!! Hãy Đăng Nhập lại.');
        return navigate('/login');
    }

    console.log('sisis', dataUser);
    return (
        <header className={cx('wapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <LogoWebsite />
                </div>
                <div className={cx('searchbar')}>
                    <input type="text" className={cx('searchinput')} placeholder="Hãy Nhập gì đó..." />
                    <span className={cx('searchdecore')}>|</span>
                    <button className={cx('searchbtn')}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                <div className={cx('HeaderRightContain')}>
                    <Link to={'/'} className={cx('headerbtn')}>
                        <FontAwesomeIcon icon={faHome} />
                    </Link>

                    {dataUser.isUser === 0 ? (
                        <Link to={'/admin'} className={cx('headerbtn')}>
                            <FontAwesomeIcon icon={faToolbox} />
                        </Link>
                    ) : (
                        ''
                    )}

                    <button className={cx('headerbtn')}>
                        <FontAwesomeIcon icon={faBell} />
                        <span className={cx('alertheader')}>
                            <FontAwesomeIcon icon={faCircle} />
                        </span>
                        <span className={cx('insertcmomtor')}></span>
                        <div className={cx('dropinfo')}>
                            <div className={cx('attention')}>Thông báo</div>
                            <hr/>
                            <div className={cx('dropdown')}>
                                <div className={cx('notify_item')}>
                                    <div className={cx('notify_icon_attention')}>
                                    <i class="fa-solid fa-exclamation"></i>
                                    </div>
                                    <div className={cx('notify_info')}>
					                    <p>Stom on Timeline Share </p>
					                    <span className={cx('notify_time')}>10 phút trước</span>
                                    </div>
			                    </div>
                                <div className={cx('notify_item')}>
                                    <div className={cx('notify_icon_warning')}>
                                    <i class="fa-solid fa-triangle-exclamation"></i>
                                    </div>
                                    <div className={cx('notify_info')}>
					                    <p>Stom is coming Timeline Share </p>
					                    <span className={cx('notify_time')}>1 ngày trước</span>
                                    </div>
			                    </div>

                                <div className={cx('notify_item')}>
                                    <div className={cx('notify_icon_warning')}>
                                    <i class="fa-solid fa-triangle-exclamation"></i>
                                    </div>
                                    <div className={cx('notify_info')}>
					                    <p>Stom is coming Timeline Share </p>
					                    <span className={cx('notify_time')}>1 ngày trước</span>
                                    </div>
			                    </div>
                                <div className={cx('notify_item')}>
                                    <div className={cx('notify_icon_warning')}>
                                    <i class="fa-solid fa-triangle-exclamation"></i>
                                    </div>
                                    <div className={cx('notify_info')}>
					                    <p>Stom is coming Timeline Share </p>
					                    <span className={cx('notify_time')}>1 ngày trước</span>
                                    </div>
			                    </div>
                                <div className={cx('notify_item')}>
                                    <div className={cx('notify_icon_warning')}>
                                    <i class="fa-solid fa-triangle-exclamation"></i>
                                    </div>
                                    <div className={cx('notify_info')}>
					                    <p>Stom is coming Timeline Share </p>
					                    <span className={cx('notify_time')}>1 ngày trước</span>
                                    </div>
			                    </div>
                                
                            </div>
                            
                        </div>
                    </button>
                    <Link
                        to={localStorage.getItem('username') != null ? '/Profile' : '/login'}
                        className={cx('headerbtn')}
                    >
                        <FontAwesomeIcon icon={faUser} />
                        {'  '}
                        {localStorage.getItem('username')}
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
