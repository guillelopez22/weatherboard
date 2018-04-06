require 'test_helper'

class ClimasControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get climas_index_url
    assert_response :success
  end

end
