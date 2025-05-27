import React from "react";

const JobCard = ({ job }) => {
  // Conditional rendering of company logo based on company name

  const getTimeAgo = (createdAt) => {
    const now = new Date();
    const posted = new Date(createdAt);
    const diffMs = now - posted;
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);
  
    if (diffMinutes < 1) return "Just now";
    if (diffMinutes < 60) return `${diffMinutes}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${diffDays}d ago`;
  };

  const getCompanyLogo = (companyName) => {
    if (!companyName) return "/company/office.png";
  
    const name = companyName.toLowerCase().trim();
  
    switch (name) {
      case "amazon":
        return "/company/amazon.png";
      case "apple":
        return "/company/apple.png";
      case "cybermind":
        return "/company/cybermind.png";
      case "facebook":
        return "/company/facebook.png";
      case "google":
        return "/company/google.png";
      case "microsoft":
        return "/company/microsoft.png";
      case "tesla":
        return "/company/tesla.png";
      case "swiggy":
        return "/company/swiggy.png";
      default:
        return "/company/office.png";
    }
  };
  

  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 relative border border-gray-200">
      {/* Posted Time */}
      <span className="absolute top-4 right-4 bg-[#B0D9FF] text-[#000000] text-sm font-medium px-3 py-1 rounded-full">
  {getTimeAgo(job.created_at)}
</span>

      {/* Company Logo */}
      <div className="w-16 h-16 mb-4 bg-gradient-to-t from-[#F1F1F1] to-[#FEFEFD] flex items-center justify-center shadow-md rounded-xl">
        <img
          src={getCompanyLogo(job.company_name)}
          alt="Company Logo"
          className="w-full h-full object-contain rounded-full p-2"
        />
      </div>

      {/* Job Title */}
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{job.job_title}</h3>

      {/* Job Info */}
      <div className="flex flex-nowrap gap-x-4 gap-y-2 text-sm text-gray-600 mb-4">
        {/* Experience */}
        <div className="flex items-center gap-1">
          <img src="/icons/exp.png" alt="sute" />

         <span className="text-nowrap">
         {job.experience || '1-3 yr Exp'}
          </span> 
        </div>

        {/* Location */}
        <div className="flex items-center gap-1">
          <img src="/icons/site.png" alt="sute" />
          {job.location || 'Onsite'}
        </div>

        {/* Salary */}
        <div className="flex items-center gap-1">
          <img src="/icons/lpa.png" alt="sute" />
          {job.salary || '12LPA'}
        </div>
      </div>

      {/* Description */}
{job.job_description ? (
  <ul className="text-sm space-y-1 text-gray-700 list-disc list-outside pl-5 mb-4">
    {job.job_description
      .split(".")
      .map((sentence) => sentence.trim())
      .filter((sentence) => sentence.length > 0)
      .map((point, index) => (
        <li key={index}>{point}.</li>
      ))}
  </ul>
) : (
  <p className="text-sm text-gray-500 mb-4">No description available.</p>
)}


      
           {/* Apply Button */}
        <button className="w-full cursor-pointer bg-[#00AAFF] hover:bg-[#007BDB]   text-white font-medium py-2 rounded-lg transition" onClick={() => alert  ('Application submitted!')}>
          Apply Now
        </button>
     
    </div>
  );
};

export default JobCard;