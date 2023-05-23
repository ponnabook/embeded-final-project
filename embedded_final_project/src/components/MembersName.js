import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 20px;
`
const Table = styled.table`
    box-sizing: border-box;
    table-layout : fixed;
    width: 1180px;
    background: #FFFFFF;
    border-collapse: collapse;

    border: 1px solid #F9FAFB;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
    border-radius: 8px;
`

const TableRow = styled.tr`
    
`

const TableHeader = styled.th`
    padding: 12px 24px;
    background: #F9FAFB;
    text-align: left;
`

const TableInfo = styled.td`
    padding: 16px 24px;
    color: #6B7280;
`

const TableNameInfo = styled.td`
    padding: 16px 24px;
    color: #111827;
`


const MembersName = () => {
    return <Container className='member' id='member'>
         <h1>Team Members</h1>
         <Table>
            <TableRow>
                <TableHeader>Name</TableHeader>
                <TableHeader>STUDENT ID</TableHeader>
                <TableHeader>Role</TableHeader>
            </TableRow>
            <TableRow>
                <TableNameInfo>Tittaya Worawongtad</TableNameInfo>
                <TableInfo>6431314821</TableInfo>
                <TableInfo>Embedded System Development</TableInfo>
                
            </TableRow>
            <TableRow>
            <TableNameInfo>Ponnapat Darunaitorn</TableNameInfo>
                <TableInfo>6431332021</TableInfo>
                <TableInfo>UX/UI Design, Frontend Development</TableInfo>
            </TableRow>
            <TableRow>
                <TableNameInfo>Matikant Vatrasresth</TableNameInfo>
                <TableInfo>6432142321</TableInfo>
                <TableInfo>System Architecture</TableInfo>
            </TableRow>
         </Table>
    </Container>
   
  };
  
export default MembersName;