import styled from 'styled-components';

export const Container = styled.div`
background: ${props => props.toDelete ? "red" : props => props.highlight ? "yellow" : "white"};
max-width:1200px;
min-width:600px;
display:flex;justify-content:space-between; align-items:center;
padding:10px 20px;
border-bottom: 1px solid #000;
:last-child {border:0;}

.actions_content{display:flex;justify-content:center; align-items:center;}

`;