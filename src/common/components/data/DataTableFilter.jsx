import * as React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import {
    DataGrid,
    GridOverlay,
    GridToolbarDensitySelector,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarContainer,
    GridToolbarExport
} from '@mui/x-data-grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useDemoData } from '@mui/x-data-grid-generator';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';
import { createTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { UrlParse, AltReq } from '../../../utils/AltReq';

function escapeRegExp(value) {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}


const defaultTheme = createTheme();
const useStyles = makeStyles(
    (theme) => ({
        root: {
            padding: theme.spacing(0.5, 0.5, 0),
            justifyContent: 'space-between',
            display: 'flex',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            fontColor: 'white',
        },
        textField: {
            [theme.breakpoints.down('xs')]: {
                width: '100%',
            },
            margin: theme.spacing(1, 0.5, 1.5),
            '& .MuiSvgIcon-root': {
                marginRight: theme.spacing(0.5),
            },
            '& .MuiInput-underline:before': {
                borderBottom: `1px solid ${theme.palette.divider}`,
            },
        },
    }),
    { defaultTheme },
);

function CustomLoadingOverlay() {
    return (
      <GridOverlay>
        <div style={{ position: 'absolute', top: 0, width: '100%' }}>
          <LinearProgress />
        </div>
      </GridOverlay>
    );
  }

  let loading = false

function QuickSearchToolbar(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>
                {loading ? <CustomLoadingOverlay /> : null}
                <GridToolbarContainer>
                    <GridToolbarColumnsButton />
                    <GridToolbarFilterButton />
                    <GridToolbarDensitySelector />
                    <GridToolbarExport />
                </GridToolbarContainer>
            </div>
            <TextField
                variant="standard"
                value={props.value}
                onChange={props.onChange}
                placeholder="Search…"
                className={classes.textField}
                InputProps={{
                    startAdornment: <SearchIcon fontSize="small" />,
                    endAdornment: (
                        <IconButton
                            title="Clear"
                            aria-label="Clear"
                            size="small"
                            style={{ visibility: props.value ? 'visible' : 'hidden' }}
                            onClick={props.clearSearch}
                        >
                            <ClearIcon fontSize="small" />
                        </IconButton>
                    ),
                }}
            />
        </div>
    );
}

QuickSearchToolbar.propTypes = {
    clearSearch: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export const DataTableFilter = (e) => {
    let id = UrlParse(e.id, 'group-stats')
    //const res =  AltReq(id)
    //const { data } = res.data.players.map(player => {return {name: player.name}})
    /*
    const fetchListData = async () => {
        const res = await AltReq(id)
        //let data = res.data.players.map(player => {return {name: player.name}})
        //const { rows } = await res.data.players.map(player => {return {name: player.name}})
        //console.log(rows)
        setRows(res)
    }
    fetchListData()*/
    let data
    //console.log(data)

    const [searchText, setSearchText] = React.useState('');
    const [rows, setRows] = React.useState([]);
    //const [list, setList] = React.useState("");

    const requestSearch = (searchValue) => {
        setSearchText(searchValue);
        const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
        const filteredRows = rows.filter((row) => {
            return Object.keys(row).some((field) => {
                return searchRegex.test(row[field].toString());
            });
        });
        setRows(filteredRows);
    };

    

    /*React.useEffect(() => {
        setRows(data.rows);
    }, [data.rows]);*/

    
    React.useEffect(() => {
            //const res = await AltReq(id)
            //let data = res.data.players.map(player => {return {name: player.name}})
            //const { rows } = await res.data.players.map(player => {return {name: player.name}})
            //console.log(rows)

            AltReq(id)
            .then(res => {
                console.log(res)
                const data  = res.data.players.map(player => {return {id: player.id, name: player.name}})
                console.log(data)
                setRows(data)
            })

            
        // eslint-disable-next-line
    }, [])
    
    return (
        <div style={{ display: 'flex', height: '80vh', width: '100%' }}>
            <div style={{ flexGrow: 1 }}>
                <DataGrid
                    components={{ Toolbar: QuickSearchToolbar }}
                    rows={rows}
                    columns={[{
                        field: 'name',
                        headerName: 'Names',
                        width: 150,
                        editable: true,
                      }]}
                    componentsProps={{
                        toolbar: {

                            value: searchText,
                            onChange: (event) => requestSearch(event.target.value),
                            clearSearch: () => requestSearch(''),

                        },

                    }}

                />
            </div>
        </div>
    );
}
