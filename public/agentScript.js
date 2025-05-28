"use strict";


function agentStatus() {
let agentQueries;

const orgID = document.getElementById("orgID");

const hmtlOrgID = orgID.value

const agentID = document.getElementById("agentID");

const htmlAgentID = agentID.value
  agentQueries = `query AgentStatus {
    asset(id: "${htmlAgentID}", orgId: "${hmtlOrgID}") {
      agent {
        agentStatus
        agentVersion
        beaconTime
        agentMode
        agentSemanticVersion
        agentLastUpdateTime
      }
      host {
        hostNames {
          name
        }
        primaryAddress {
          ip
        }
      }
    }
  }`

  navigator.clipboard.writeText(agentQueries);

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied!";
}

function agentAssessment() {
let agentQueries;

const orgID = document.getElementById("orgID");

const hmtlOrgID = orgID.value

const agentID = document.getElementById("agentID");

const htmlAgentID = agentID.value
    agentQueries = `query AgentAssessment {
        asset(id: "${htmlAgentID}", orgId: "${hmtlOrgID}") {
          agent {
            agentStatus
            agentSemanticVersion
          }
          data {
            results {
              vulnerabilityAssessment {
                osFingerprint {
                  architecture
                  certainty
                  description
                  family
                  product
                  source
                  type
                  vendor
                  version
                }
                software {
                  certainty
                  family
                  product
                  type
                  vendor
                  version
                }
                time
                vulnerabilities {
                  assessmentId
                  checkId
                  proof
                  status
                }
              }
            }
          }
          host {
            hostNames {
              name
            }
            primaryAddress {
              ip
            }
          }
        }
      }
      `
  
    navigator.clipboard.writeText(agentQueries);
  
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied!";
  }

  function agentCollection() {
let agentQueries;

const orgID = document.getElementById("orgID");

const hmtlOrgID = orgID.value

const agentID = document.getElementById("agentID");

const htmlAgentID = agentID.value
    agentQueries = `query S3Buckets {
        asset(id: "${htmlAgentID}", orgId: "${hmtlOrgID}") {
          host {
            description
            hostNames {
              name
            }
            primaryAddress {
              ip
            }
          }
          agent {
            agentStatus
            agentSemanticVersion
            agentMode
            timestamp
            beaconTime
          }
          pointers {
            bucket
            jobType
            key
            presigned
          }
        }
      }
      `
  
    navigator.clipboard.writeText(agentQueries);
  
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied!";
  }


  function agentLogs() {
let agentQueries;

const orgID = document.getElementById("orgID");

const hmtlOrgID = orgID.value

const agentID = document.getElementById("agentID");

const htmlAgentID = agentID.value
    agentQueries = `subscription
    {
      requestLog(orgId :"${hmtlOrgID}", agentId: "${htmlAgentID}" )
      {
        state
        presignedUrl
      }
    }`
  
    navigator.clipboard.writeText(agentQueries);
  
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied!";
  }

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

