import React, { useState,useEffect } from 'react';

const InterviewList = ({ interviewList }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case 'Ongoing':
        return 'bg-accent';
      case 'Upcoming':
        return 'bg-green-500';
      case 'Missed':
        return 'bg-red-500';
      case 'Completed':
        return 'bg-blue-500';
      default:
        return 'bg-accent-500';
    }
  };

  const [selectedList, setSelectedList] = useState('Ongoing');

  console.log("List ",interviewList);

  const InterviewType = [
    'Ongoing',
    'Upcoming',
    'Completed',
    'Missed',
  ];

  const handleChangeList = (type) => {
    setSelectedList(type);
  };

  const filteredList = interviewList?.filter((item) => item.status === selectedList);

  useEffect(() => {
  }, [interviewList]);

  return (
    <>
      <div className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3 justify-center md:flex md:flex-row md:justify-center">
        <div className="rounded-sm border bg-card lg:min-w-[60vw] text-card shadow-sm col-span-1 md:col-span-2 lg:col-span-2" data-v0-t="card">
          <div dir="ltr" data-orientation="horizontal">
            <div role="tablist" aria-orientation="horizontal" className="inline-flex gap-1 h-9 items-center justify-center rounded-sm bg-primary p-1 text-muted" tabIndex="0" data-orientation="horizontal" style={{ outline: 'none' }}>
              {InterviewType.map((type, index) => (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={type === selectedList}
                  aria-controls={`radix-${index}-content`}
                  data-state={type === selectedList ? 'active' : ''}
                  id={`radix-${index}-trigger`}
                  className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${type === selectedList ? 'bg-card text-[#222222]' : 'bg-primary text-primary'}`}
                  tabIndex="-1"
                  data-orientation="horizontal"
                  data-radix-collection-item=""
                  onClick={() => handleChangeList(type)}
                >
                  {type}
                </button>
              ))}
            </div>
            <div data-state="active" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-trigger" id="radix-content" tabIndex="0" className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" style={{ outline: 'none' }}>
              <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                  <thead className="[&amp;_tr]:border-b">
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted [&amp;:has([role=checkbox])]:pr-0">
                        Candidate
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted [&amp;:has([role=checkbox])]:pr-0">
                        Company
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted [&amp;:has([role=checkbox])]:pr-0">
                        Position
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted [&amp;:has([role=checkbox])]:pr-0">
                        Date
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted [&amp;:has([role=checkbox])]:pr-0">
                        Time
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted [&amp;:has([role=checkbox])]:pr-0">
                        Status
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted [&amp;:has([role=checkbox])]:pr-0">
                        Download
                      </th>
                    </tr>
                  </thead>
                  <tbody className="[&amp;_tr:last-child]:border-0">
                    {filteredList.length > 0 ? (
                      filteredList.map((item, index) => (
                        <tr key={index} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                            <span className="flex items-center space-x-2">
                              <span className="max-w-[500px] text-[#222222] truncate font-medium">{item.candidateName}</span>
                            </span>
                          </td>
                          <td className="p-4 text-[#222222] align-middle [&amp;:has([role=checkbox])]:pr-0">
                            {item.companyName}
                          </td>
                          <td className="p-4 text-[#222222] align-middle [&amp;:has([role=checkbox])]:pr-0">
                            {item.position}
                          </td>
                          <td className="p-4 text-[#222222] align-middle [&amp;:has([role=checkbox])]:pr-0">
                            {item.date}
                          </td>
                          <td className="p-4 text-[#222222] align-middle [&amp;:has([role=checkbox])]:pr-0">
                            {item.time}
                          </td>
                          <td className="p-4 text-primary align-middle [&amp;:has([role=checkbox])]:pr-0">
                            <p className={`p-2 rounded-sm ${getStatusClass(item.status)}`}>{item.status}</p>
                          </td>
                          <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                            <button className="inline-flex text-primary bg-primary items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent h-9 rounded-sm px-3">
                              {item.report}
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7" className="p-4 text-center">
                          No interviews found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InterviewList;
