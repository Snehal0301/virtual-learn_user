import React from 'react';
import './Certificate.css';
import { useDispatch, useSelector } from 'react-redux';
import { showCertificate } from '../../../../redux/reducers/Conditions';
import { closeIcon, downloadIcon } from '../../../../utils/svgIcons';

const Certificate = () => {
  const dispatch = useDispatch();
  const showCert = useSelector((state: any) => state.loginConditions.quizModal);

  return (
    <>
      {' '}
      {showCert && (
        <aside
          className="headerSearch-filterModal"
          style={{
            alignItems: 'center',
            marginTop: 'unset',
          }}
        >
          <div
            className="headerSearch-filterActualModal"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="certificate-header">
              <div className="certificate-headerTitle">Course Certificate</div>
              <button className="certificate-headerDownload">
                {downloadIcon}{' '}
              </button>
            </div>
            <div className="certificate">
              <img
                src={require('../../../../assets/images/dummy/certificate-of-completion-_Virtuallearn2 1.png')}
                alt="Certificate"
              />
            </div>
            <div
              className="headerSearch-filterModalBodyCloseIcon"
              onClick={(e) => {
                dispatch(showCertificate(false));
              }}
              style={{
                position: 'fixed',
                top: '100px',
                right: '80px',
                filter: 'invert(1)',
              }}
            >
              {closeIcon}
            </div>
          </div>
        </aside>
      )}
    </>
  );
};

export default Certificate;
