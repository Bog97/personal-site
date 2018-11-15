import React, { Component } from 'react';
import * as d3 from 'd3';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

export class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        d3.csv('data/projects.csv').then((data) => {
            this.setState({ data: data });
        });
    }

    render() {
        return (<div className="container mb-5 p-5">
        <h1 className="mb-5">PROJECTS:</h1>
            {this.state.data.map((ele, i) => {
                return <Card key={i}>
                    <CardBody>
                        <CardTitle><a href={ele.link}>{ele.name}</a></CardTitle>
                        <CardText>{ele.description}</CardText>
                    </CardBody>
                </Card>
            })}
        </div>)
    }
}