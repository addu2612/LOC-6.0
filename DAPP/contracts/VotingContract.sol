//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

contract Create{
    using Counters for Counters.Counter;
    Counters.Counter private _voterIds;
    Counters.Counter private _candidateIds;
    Counters.Counter private _voteIds;
    Counters.Counter private _electionIds;

    address public votingOrganizer;

    struct Candidate {
        uint256 candidateId; 
        string age; 
        string name; 
        string image;
        uint256 voteCount;
        address _address;
        string ipfs;
    }

    event CandidateCreate (
        uint256 indexed candidateId;
        string age; 
        string name; 
        string image; 
        uint256 voteCount; 
        address _address; 
        string ipfs;
    )

    address[] public candidateAddress;
    mapping(address = Candidate) public candidates;
    address[] public votedVoters;
    address[] public votersAddress;
    mapping(address = bool) public voters;

    struct Voter{
        uint256 voter_voterId;
        string voter_name;
        string voter_age;
        string voter_image;
        uint256 voter_allowed;
        bool voter_voted;
        unit256 voter_vote;
        address voter_address;
        string voter_ipfs;
    }

    event VoterCreated (
        uint256 indexed voter_voterId, 
        string voter_name, 
        string voter_image, 
        address voter_address, 
        uint256 voter_allowed, 
        bool voter_voted, 
        uint256 voter_vote, 
        string voter_ipfs
    );

    constructor (){
        votingOrganizer = msg-sender;
    }

    function setCandidate(address _address, string memory _age, string memory _name, string memory _image, string memory _ipfs)public{
        require(votingOrganizer==msg.sender,"Only Organizer can create candidate");

        _candidateId.increment();
    

    uint256 idNumber =_candidateId.current();
    Candidate storage candidate=candidates[_address];
    candidate.age=_age;
    candidate.candidateId=idNumber;
    candidate.image=_image;
    candidate.voteCount=0;
    candidate._address=_address;
    candidate.ipfs=_ipfs;

    candidateAddress.push(_address);

    emit CandidateCreate(
        idNumber,
        _age,
        _name,
        _image,
        candidate.voteCount,
        _address,
        _ipfs
    );
    }
}

