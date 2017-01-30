var tblAds = new Vue({
	el: '#tblData',
	data: {
		columns: [ 'client', 'ad', 'rt', 'select' ],
		tableData: [ 
			{
				client: 'PSU',
				ad: 'Summer',
				rt: '1:32'
			},
			{
				client: 'Computer Store',
				ad: 'fix',
				rt: '2:14'
			},
			{
				client: 'Timevault',
				ad: 'MTG',
				rt: '0:47'
			}
		 ]
	}
})

var tblScreens = new Vue({
	el: '#tblChoose',
	data: {
		columns: [ 'screen', 'disc', 'util', 'select' ],
		tableData: [ 
			{
				screen: 'BP #1',
				disc: '5%',
				until: '60%'
			},
			{
				screen: 'BP #2',
				disc: '0',
				until: '57%'
			},
			{
				screen: 'BP #3',
				disc: '0',
				until: '87%'
			}
		 ]
	}
})




