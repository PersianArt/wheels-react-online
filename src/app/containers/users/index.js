import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import UserItem from '../../components/table/userItem';
import { Spinner } from '../../components/table/spinner';
import Sorter from '../../components/table/sorter';
import Filter from '../../components/table/filter';
import AutoSearch from '../../components/table/autoSearch';
import Pagination from '../../components/table/pagination';
import { getUsers } from '../../../redux/actions/userActions';

class UsersList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            userData: [],
            meta: {},
            userApiQuery: {
                page: null,
                page_size: null,
                sort_order: null,
                sort_by: null,
                search_field: null,
                search_value: null,
                filter_field: null,
                filter_values: null
            },
            editedId: 0,
        }
    }

    componentDidMount() {
        this.setState({
            loading: this.props.users.loading,
            userData: this.props.users.all,
            meta: this.props.users.meta,
            editedId: this.props.editedId,
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.users !== this.props.users) {
            this.setState({
                loading: nextProps.users.loading,
                userData: nextProps.users.all,
                meta: nextProps.users.meta,
            })
        }
        if (nextProps.editedId !== this.props.editedId) {
            this.setState({
                editedId: nextProps.editedId,
            })
        }
    }

    getUsers = (query) => {
        try {
            this.props.getUsers({ params: query })
        } catch (e) {
            console.log(e);
        }
    };

    setPage = (page) => {
        this.setState({
            userApiQuery: {
                ...this.state.userApiQuery,
                page: page
            }
        }, () => {
            this.getUsers(this.state.userApiQuery);
        })
    };

    setPageSize = (e) => {
        this.setState({
            userApiQuery: {
                ...this.state.userApiQuery,
                page_size: e.target.value,
                page: null
            }
        }, () => {
            this.getUsers(this.state.userApiQuery);
        })
    };

    setSort = (by, dir) => {
        this.setState({
            userApiQuery: {
                ...this.state.userApiQuery,
                sort_order: dir,
                sort_by: by,
                page: null
            }
        }, () => {
            this.getUsers(this.state.userApiQuery);
        })
    };

    setSearch = (field,value) => {
        this.setState({
            userApiQuery: {
                ...this.state.userApiQuery,
                search_field: field,
                search_value: value,
                page: null
            }
        }, () => {
            this.getUsers(this.state.userApiQuery);
        })
    };

    setFilter = (key, values) => {
        this.setState({
            userApiQuery: {
                ...this.state.userApiQuery,
                filter_field: key,
                filter_values: values.join(),
                page: null
            }
        }, () => {
            this.getUsers(this.state.userApiQuery);
        })
    };

	render() {
        const { loading, userData, userApiQuery:{page_size,sort_order,sort_by}, editedId } = this.state;

        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-xs-12'>
                        <div className='row'>
                            <div className='col-xs-3 col-md-2'>
                                <select value={page_size || 10} onChange={this.setPageSize}>
                                    <option value={10}>10</option>
                                    <option value={15}>15</option>
                                    <option value={20}>20</option>
                                    <option value={25}>25</option>
                                </select>
                            </div>
                            <div className='col-xs-12 col-md-8'>
                            </div>
                            <div className='col-xs-3 col-md-2'>
                                <Link to={`dashboard/user/add`} className='normal-button block' title='Edit'>Add user</Link>
                            </div>
                        </div>
                        <Spinner loading={loading}>
                            <table className='shop_table cart'>
                                <thead>
                                <tr>
                                    <th className='product-name'>
                                        <Sorter order={sort_order} by={sort_by} field='id' setSort={(sort,dir) => this.setSort(sort,dir)} />ID</th>
                                    <th className='product-quantity'>
                                        <Sorter order={sort_order} by={sort_by} field='username' setSort={(sort,dir) => this.setSort(sort,dir)} />
                                        User Name
                                        <AutoSearch field='username' setSearch={(field,value) => this.setSearch(field,value)} />
                                    </th>
                                    <th className='product-thumbnail'>Avatar</th>
                                    <th className='product-name'>
                                        <Sorter order={sort_order} by={sort_by} field='firstname' setSort={(sort,dir) => this.setSort(sort,dir)} />Name</th>
                                    <th className='product-subtotal'>
                                        <Sorter order={sort_order} by={sort_by} field='email' setSort={(sort,dir) => this.setSort(sort,dir)} />Email</th>
                                    <th className='product-subtotal'>
                                        <Filter field='active' values={{'active':1, 'inactive':0}} setFilter={(field,values) => this.setFilter(field,values)} />Active</th>
                                    <th className='product-remove'>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    userData.map( item => <UserItem key={item.id} item={item} active={item.id === editedId} /> )
                                }
                                </tbody>
                            </table>
                        </Spinner>
                        <Pagination loading={!this.state.loading} meta={this.state.meta} setPage={page => this.setPage(page)} />
                    </div>
                </div>
            </div>
        )
	}
}

const mapStateToProps = state => ({
    users: state.users
});

export default connect(mapStateToProps, {getUsers})(UsersList);

