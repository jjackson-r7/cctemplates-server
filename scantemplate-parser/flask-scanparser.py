from flask import Flask, request, render_template, redirect, url_for
import os
import datetime

from process import (
    process_general_section, asset_discovery, service_discovery,
    discovery_performance, vulnerability_checks, scan_assistant,
    file_search, spam_relay, database, mail_servers, cvs_servers,
    dhcp_servers, telnet_servers, policy_manager, oracle_policy,
    lotus, windows_group, cif_smb_account, as_400_policy, unix_policy
)

app = Flask(__name__, static_url_path='/scantemplate/static')
app.config['UPLOAD_FOLDER'] = 'uploads'


def create_upload_directory():
    # Create the uploads directory if it doesn't exist
    upload_dir = app.config['UPLOAD_FOLDER']
    if not os.path.exists(upload_dir):
        os.makedirs(upload_dir)


create_upload_directory()


@app.route('/scantemplate/upload', methods=["GET", "POST"])
def upload():
    if request.method == "POST":
        uploaded_file = request.files.get('file')  # Handle None if no file uploaded
        case_number = request.form.get('case_number')

        if not uploaded_file or not case_number:
            error_message = "Please upload a file and provide a case number."
            return render_template("index.html", error_message=error_message)

        try:
            # Save the uploaded file to disk
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], uploaded_file.filename)
            uploaded_file.save(file_path)

            # Process uploaded file
            general_output = process_general_section(file_path)
            asset_output = asset_discovery(file_path)
            service_output = service_discovery(file_path)
            discovery_output = discovery_performance(file_path)
            vulnerability_output = vulnerability_checks(file_path)
            scan_assistant_output = scan_assistant(file_path)
            file_search_output = file_search(file_path)
            spam_relay_output = spam_relay(file_path)
            database_output = database(file_path)
            mail_output = mail_servers(file_path)
            cvs_output = cvs_servers(file_path)
            dhcp_output = dhcp_servers(file_path)
            telnet_output = telnet_servers(file_path)
            policy_output = policy_manager(file_path)
            oracle_output = oracle_policy(file_path)
            lotus_output = lotus(file_path)
            windowsg_output = windows_group(file_path)
            cif_smb_output = cif_smb_account(file_path)
            as_400_output = as_400_policy(file_path)
            unix_output = unix_policy(file_path)

            # Generate log message
            timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            log_message = f"Timestamp: {timestamp}, Case Number: {case_number}\n"

            # Save log to file
            log_file_path = os.path.join(app.config['UPLOAD_FOLDER'], 'log.txt')
            with open(log_file_path, 'a') as log_file:
                log_file.write(log_message)
                
            # Combine results
            combined_result = '\n\n'.join([
                general_output, asset_output, service_output, discovery_output,
                vulnerability_output, scan_assistant_output, file_search_output,
                spam_relay_output, database_output, mail_output, cvs_output,
                dhcp_output, telnet_output, policy_output, oracle_output,
                lotus_output, windowsg_output, cif_smb_output, as_400_output,
                unix_output
            ])

            # Remove uploaded file
            os.remove(file_path)

            return render_template("output.html", upload_result=combined_result)
        except Exception as e:
                error_message = f"Error processing the uploaded file: {str(e)}"
                return render_template("index.html", error_message=error_message)

    else:
        # If the route is accessed with a GET request (i.e., page refresh), redirect to /scantemplate
        return redirect(url_for('index'))

@app.route('/scantemplate/')
def redirect_to_scantemplate():
    # Redirect /scantemplate/ to /scantemplate
    return redirect(url_for('index'))

@app.route('/scantemplate')
def index():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)
