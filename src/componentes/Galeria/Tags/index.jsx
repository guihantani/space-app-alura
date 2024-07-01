import styled from 'styled-components'
import tags from './tags.json'

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`

const Tag = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
}
`

const TagsContainerMain = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 56px 0 39px 0;
    gap: 50px;
`

const TagsContainer = styled.div`
    display: flex;
    gap: 10px;
`

const Tags = () =>{
    return(
        <TagsContainerMain>
            <TagTitulo>Busque por tags:</TagTitulo>
            <TagsContainer>
                {tags.map(tag => <Tag key={tag.id}>{tag.titulo}</Tag>)}
            </TagsContainer>
        </TagsContainerMain>
    )
}

export default Tags