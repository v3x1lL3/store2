const TableContainer = ({ children, props }) => {
  return <table {...props}>{children}</table>;
};

const THead = ({ children, props }) => {
  return <thead {...props}>{children}</thead>;
};

const TBody = ({ children, props }) => {
  return <tbody {...props}>{children}</tbody>;
};

const TFoot = ({ children, props }) => {
  return <tfoot {...props}>{children}</tfoot>;
};

const Row = ({ children, props }) => {
  return <tr {...props}>{children}</tr>;
};

const Column = ({ children, props }) => {
  return <td {...props}>{children}</td>;
};

const ColumnHeader = ({ children, props }) => {
  return <th {...props}>{children}</th>;
};

const Table = {
  TableContainer,
  THead,
  TBody,
  TFoot,
  Row,
  Column,
  ColumnHeader,
};

export default Table;

/* 
    <table>
        <thead>
            <tr>
                <td></td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td></td>
            </tr>
        </tfoot>
    </table>
*/
