import styled from 'styled-components';

const WrapperProfile = styled.section`
  padding-top: 30px;
  padding-bottom: 15px;
  color: #6f6b6b;
  text-align: center;
  .profile {
    margin: 0 auto;
    width: 300px;
    overflow: hidden;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #b295ba;
    box-shadow: 4px 4px 9px 7px rgba(34, 60, 80, 0.2);
    transition: transform 250ms linear, box-shadow 250ms linear;
    &:hover {
      transform: scale(1.03);
      box-shadow: 4px 4px 15px 11px rgba(12, 105, 101, 0.27);
    }
  }
  .description {
    padding: 15px;
  }
  .avatar {
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    width: 250px;
    margin-bottom: 15px;
    border: 0.5px solid grey;
    border-radius: 50%;
  }
  .name,
  .tag {
    margin-bottom: 10px;
  }
  .name {
    color: #212121;
    font-weight: 700;
    font-size: 20px;
  }
  .stats {
    display: flex;
    justify-content: space-between;
  }
  .stats li {
    padding: 15px 10px 20px;
    width: calc(100% / 3);
    background-color: #e2d7f8;
    border-top: 1px solid #b295ba;
    &:hover {
      color: #702bad;
    }
  }
  .stats li:not(:last-child) {
    border-right: 1px solid #b295ba;
  }
  .label {
    display: block;
    margin-bottom: 10px;
  }
  .quantity {
    display: block;
    color: #212121;
    font-weight: 700;
    font-size: 14px;
  }
`;

export default WrapperProfile;