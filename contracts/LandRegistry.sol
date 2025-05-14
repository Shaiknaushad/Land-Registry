// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LandRegistry {
    struct Land {
        uint id;
        string location;
        address owner;
    }

    mapping(uint => Land) public lands;

    function registerLand(uint _id, string memory _location) public {
        lands[_id] = Land(_id, _location, msg.sender);
    }

    function getLand(uint _id) public view returns (string memory, address) {
        Land memory land = lands[_id];
        return (land.location, land.owner);
    }
}