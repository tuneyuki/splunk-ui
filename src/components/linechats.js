import Line from '@splunk/visualizations/Line';

const MyAppWithSplunkLineChart = props => {
    // const { dataSource } = props;
    // return <Line width={600} height={400} dataSources={ {primary: dataSource} } />;
    return <Line
    options={{}}
    dataSources={{
        primary: {
            requestParams: { offset: 0, count: 20 },
            data: {
                fields: [
                    {
                        name: '_time',
                    },
                    {
                        name: 'count',
                        type_special: 'count',
                    },
                    {
                        name: 'percent',
                        type_special: 'percent',
                    },
                ],
                columns: [
                    [
                        '2018-05-02T18:10:46.000-07:00',
                        '2018-05-02T18:11:47.000-07:00',
                        '2018-05-02T18:12:48.000-07:00',
                        '2018-05-02T18:13:49.000-07:00',
                        '2018-05-02T18:15:50.000-07:00',
                    ],
                    ['600', '525', '295', '213', '122', '19'],
                    ['87.966380', '50.381304', '60.023780', '121.183272', '70.250513', '90.194752'],
                ],
            },
            meta: { totalCount: 20 },
        },
    }}
    />
    
};

export default MyAppWithSplunkLineChart;