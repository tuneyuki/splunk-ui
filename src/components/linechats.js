import Line from '@splunk/visualizations/Line';

const MyAppWithSplunkLineChart = props => {
    const dataSource = props.dataSource;
    console.log(dataSource)
    // return <Line width={600} height={400} dataSources={ {primary: dataSource} } />;
    return <Line
        options={{}}
        dataSources={dataSource}
    />
    
};

export default MyAppWithSplunkLineChart;