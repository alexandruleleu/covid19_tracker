import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import styles from './Details.module.scss';

const DetailsComponent = ({ loading, onFetchDetails, data }) => {
  let { currentDate } = useParams();

  useEffect(() => {
    currentDate && onFetchDetails(currentDate);
    return () => {};
  }, [currentDate, onFetchDetails]);

  if (!currentDate) return null;
  if (loading)
    return (
      <section className={styles.detailsContainerProgress}>
        <CircularProgress />
      </section>
    );

  const columns = ['United States', 'Confirmed', 'Active', 'Recovered', 'Fatal'];
  return (
    <section className={styles.detailsContainer} id="table-section">
      <div className={styles.titleContainer}>
        <h1>Statistics by region</h1>
        <p>{`Date: ${currentDate}`}</p>
      </div>
      <div className={styles.tableContainer}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                {columns.map((column, index) => (
                  <TableCell align="left" key={index} size="medium">
                    <b>{column}</b>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.region.province}>
                  <TableCell component="th" scope="row">
                    {row.region.province}
                  </TableCell>
                  <TableCell align="left">{row.confirmed}</TableCell>
                  <TableCell align="left">{row.active}</TableCell>
                  <TableCell align="left">{!row.recovered ? '-' : row.recovered}</TableCell>
                  <TableCell align="left">{row.deaths}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </section>
  );
};

export default DetailsComponent;
