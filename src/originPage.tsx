import React from 'react';
import styled from 'styled-components';
import mainLogo from './assets/icons/logo.png';
import buyHouse from './assets/icons/buy-a-house.svg';

export function OriginPage(): JSX.Element {
  const currentDate = Date.now();

  const INPUT = styled.input.attrs((props) => ({
    type: props.type,
    size: props.size || '1em',
  }))`
    color: #4D6475;
    font-size: 1em;
    border: 1px solid #E9EEF2;
    border-radius: 3px;
    /* here we use the dynamically computed prop */
    padding: ${(props) => props.size};
    width:${(props) => props.width}};
    padding-right:${(props) => props.paddingRight}
  `;

  const SECONDINPUT = styled.div({
    boxSizing: 'border-box',
    minWidth: 0,
    border: '1px solid #E9EEF2',
    borderRadius: '3px',
    padding: '1.3em',
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: 'none',
  });

  const OTHERINPUT = styled.div({
    boxSizing: 'border-box',
    minWidth: 0,
    border: '1px solid #E9EEF2',
    borderRadius: '3px',
    padding: '1.3em',
    display: 'flex',
    borderTop: 'none',
    background: '#F4F8FA',
  });

  const BUTTON = styled.button`
    width: 320px;
    height: 56px;
    background: #1b31a8;
    border-radius: 32px;
    color: white;
    font-size: 1em;
    font-weight: bold;
  `;

  return (
    <div>
      <div
        style={{
          height: '80px',
          left: '0px',
          right: '0px',
          background: '#FFFFFF',
          top: '0px',
          zIndex: 9,
        }}
      >
        <img
          src={mainLogo}
          style={{
            left: '0%',
            right: '0%',
            top: '0%',
            bottom: '0%',
          }}
        />
      </div>
      <div
        style={{
          height: '90%',
          width: '100%',
          left: '0px',
          background: '#F4F8FA',
          position: 'absolute',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <div>Let&apos;s plan saving your goal </div>
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            background: '#FFFFFF',
            boxShadow: '0px 16px 32px rgba(30, 42, 50, 0.08)',
            width: '600px',
            height: '550px',
            padding: '50px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}
        >
          <div className="d-flex flex-row">
            <div>
              <img src={buyHouse} />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '1em',
              }}
            >
              <div
                style={{
                  fontFamily: 'sans-serif',
                  fontWeight: 'bold',
                  fontSize: '2em',
                  lineHeight: '120%',
                  color: '#1E2A32',
                }}
              >
                Buy a house
              </div>
              <div style={{ lineHeight: '150%', color: '#708797' }}>
                Saving goal
              </div>
            </div>
          </div>

          <div className="d-flex flex-row">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                width: '100%',
              }}
            >
              <div style={{ color: '#1E2A32 ' }}>Total amount</div>
              <div>
                <INPUT
                  placeholder="amount"
                  width="16em"
                  paddingRight="2em"
                  type="number"
                />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ color: '#1E2A32 ' }}>Reach goal by</div>
              <div>
                <INPUT placeholder="month" type="month" min="2022-12" />
              </div>
            </div>
          </div>

          <div className="d-flex flex-column">
            <SECONDINPUT>
              <div
                className="d-flex flex-column justify-content-center"
                style={{
                  color: '#1E2A32',
                  fontSize: '1.2em',
                }}
              >
                Monthly amount
              </div>
              <div
                style={{
                  color: '#0079FF',
                  fontSize: '1.8em',
                  fontWeight: 'bold',
                }}
                className="d-flex justify-content-center "
              >
                $543.53
              </div>
            </SECONDINPUT>
            <OTHERINPUT>
              You’re planning 48 monthly deposits to reach your $25,000 goal by
              October 2020.
            </OTHERINPUT>
          </div>
          <div className="d-flex justify-content-center ">
            <BUTTON>Confirm</BUTTON>
          </div>
        </div>
      </div>
    </div>
  );
}
