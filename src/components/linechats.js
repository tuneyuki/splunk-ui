import Line from '@splunk/visualizations/Line';

const MyAppWithSplunkLineChart = props => {
    const dataSource = props.dataSource;
    console.log(dataSource)
    // return <Line width={600} height={400} dataSources={ {primary: dataSource} } />;
    return <Line
        // options={{
        //     backgroundColor: '#000000',
        //     annotationColor: ["#FF0000", "#0000FF", "#008000"],
        //     seriesColorsByField: { count: '#990099', percent: '#22A500' },
        // }}
        dataSources={dataSource}
    />
    
};

export default MyAppWithSplunkLineChart;