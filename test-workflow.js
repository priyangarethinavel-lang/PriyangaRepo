// Change this to test different templates:
// '## Report a Bug or Incident'
// '## Configuration Change Request'
// '## Feature Request'
// '## General Request'
// '## New Group / Role Request'
// '## New Application / Client ID Request'
// '## Ask a Question'
// '## Service Account Onboarding Request'
// '## UAT Finding'

const body = '## Configuration Change Request';

const templateLabels = [
  { marker: '## Report a Bug or Incident',             label: 'bug'                  },
  { marker: '## Configuration Change Request',         label: 'configuration-change' },
  { marker: '## Feature Request',                      label: 'enhancement'          },
  { marker: '## General Request',                      label: 'triage-needed'        },
  { marker: '## New Group / Role Request',             label: 'group-role'           },
  { marker: '## New Application / Client ID Request',  label: 'new-application'      },
  { marker: '## Ask a Question',                       label: 'question'             },
  { marker: '## Service Account Onboarding Request',   label: 'service-account'      },
  { marker: '## UAT Finding',                          label: 'uat'                  },
];

const match = templateLabels.find(t => body.includes(t.marker));
const fyLabel = `FY${String(new Date().getFullYear()).slice(-2)}`;

if (!match) {
  console.log('No matching template found — skipping label.');
} else {
  console.log('Labels that would be applied:', [match.label, fyLabel]);
}
