import React, { useEffect, useState } from "react";
import { TextField, makeStyles, Grid, Avatar } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { withFirebase } from "../../../Firebase";
import { compose } from "recompose";


class ListKomentar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            KomenList: [],
        };
    }

    componentDidMount() {
        this.props.firebase.getKomentar(this.props.endpoint).on('value', snapshot => {
            const fetchedTasks = [];

            snapshot.forEach(childSnapshot => {
                fetchedTasks.push(childSnapshot.val());
            });
            this.setState({
                KomenList: fetchedTasks
            })
        });
    }

    render() {
        return (
            <div>
                {this.state.KomenList?.map((e, i) => (
                    <Grid container key={i} xs={12}
                    // className={classes.GridKomentar}
                    >
                        <Grid item xs={12} >
                            {e.email}
                        </Grid>
                        <Grid item xs={12} >
                            {e.komen}
                        </Grid>
                    </Grid>
                ))}
            </div>
        )
    }
}


// const ListKomentar = (props) => {
//     const [KomenList, setKomenList] = useState([]);

//     useEffect(() => {
//         props.firebase.getKomentar(props.endpoint).on('value', snapshot => {
//             const fetchedTasks = [];

//             snapshot.forEach(childSnapshot => {
//                 fetchedTasks.push(childSnapshot.val());
//             });
//             console.log(fetchedTasks);
//             setKomenList(fetchedTasks)
//             console.log(KomenList);
//         });

//     }, [])

//     return (
//         <div>
//             {KomenList.list?.map((e, i) => (
//                 <Grid container key={i} xs={12}
//                 // className={classes.GridKomentar}
//                 >
//                     <h1>dafsaf</h1>
//                     <Grid item xs={12} >
//                         {e.email}
//                     </Grid>
//                     <Grid item xs={12} >
//                         {e.komen}
//                     </Grid>
//                 </Grid>
//             ))}
//         </div>
//     )
// }

const KomentarList = compose(
    withRouter,
    withFirebase,
)(ListKomentar);

export default KomentarList;