exports.sendReports = (doc) => {

    const endDate = new Date('10/24/2020');
    const startDate = new Date('10/24/2020');

    switch (doc.frequency) {
        case 'daily':
            startDate.setTime(startDate.getTime() - DAY);
            sendTestReportEmail(doc.email, doc.county, doc.state, startDate, endDate, doc.frequency);
            break;
        case 'weekly':
            startDate.setTime(startDate.getTime() - 6 * DAY);
            sendTestReportEmail(doc.email, doc.county, doc.state, startDate, endDate, doc.frequency);
            break;
        case 'bi-monthly':
            startDate.setTime(startDate.getTime() - 14 * DAY);
            sendTestReportEmail(doc.email, doc.county, doc.state, startDate, endDate, doc.frequency);
            break;
        case 'monthly':
            startDate.setTime(startDate.getTime() - 30 * DAY);
            sendTestReportEmail(doc.email, doc.county, doc.state, startDate, endDate, doc.frequency);
            break;
        case 'never':
            break;
    }
};