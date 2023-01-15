import styled from "styled-components";

export const ChartBar =({ maxPrice, currentPrice, label }) => {
    const fillHeight = (100 * currentPrice) / maxPrice;

    return (
        <StyledChartBar>
            <StyledInner>
                <StyledFill style={{height: `${fillHeight}px`}}></StyledFill>
            </StyledInner>
            <StyledLabel>{label}</StyledLabel>
        </StyledChartBar>
    )
}

const StyledChartBar = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledInner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
    height: 100%;
    width: 100%;

    background: #A892EE;
    border: 1px solid #363636;
    border-radius: 12px;
    margin-bottom: 4px;
`;

const StyledFill = styled.div`
    background: #4826b9;
`;

const StyledLabel = styled.p`
    color: #222222;
    font-size: 9px;
    font-weight: 600;
`;