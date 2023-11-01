import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import axios from "axios"; // Import Axios

const TABLE_HEAD = ["Member", "Function", "Status", "Employed", ""];

export function ManageStaff() {
  const [staffList, setStaffList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStaffMembers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/staff/staffview"
        );
        setStaffList(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching staff members:", error);
        setLoading(false);
      }
    };

    fetchStaffMembers();
  }, []);

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Members list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all members
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button variant="outlined" size="sm">
              View all
            </Button>
            <Button className="flex items-center gap-3" size="sm">
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add member
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5" className="p-4 text-center">
                  Loading...
                </td>
              </tr>
            ) : (
              staffList.map((staff) => (
                <tr
                  key={staff.email}
                  className="p-4 border-b border-blue-gray-50"
                >
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {staff.name}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {staff.email}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {staff.job}
                      </Typography>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal opacity-70"
                      >
                        {staff.org}
                      </Typography>
                    </div>
                  </td>
                  <td>
                    <div className="w-max">
                      <Chip
                        variant="ghost"
                        size="sm"
                        value={staff.online ? "online" : "offline"}
                        color={staff.online ? "green" : "blue-gray"}
                      />
                    </div>
                  </td>
                  <td>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {staff.date}
                    </Typography>
                  </td>
                  <td>
                    <Tooltip content="Edit User">
                      <IconButton variant="text">
                        <PencilIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}
