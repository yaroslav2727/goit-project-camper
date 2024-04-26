import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  background: rgba(0, 0, 0, 0.7);
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  overflow: hidden;
  transform: translate(-50%, -50%);
  border-radius: 20px;
`;

export const ModalBox = styled.div`
  background-color: var(--color-white);
  padding: 40px;
  width: 900px;
  height: 720px;
  max-height: 80dvh;
  overflow-x: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;
    display: flex;
    margin-right: 8px;
  }

  &::-webkit-scrollbar-track {
    background: var(--color-cloud);
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-accent);
    border-radius: 8px;
  }
`;
